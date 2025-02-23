const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Extension "codefr" is now active!');

    let disposable = vscode.commands.registerCommand('codefr.run', async function () {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Aucun fichier CodeFr actif!');
            return;
        }

        // Make sure it's a CodeFr file
        if (editor.document.languageId !== 'codefr') {
            vscode.window.showErrorMessage('Le fichier actif n\'est pas un fichier CodeFr!');
            return;
        }

        // Save the file before running
        await editor.document.save();

        // Get the file path
        const filePath = editor.document.uri.fsPath;
        
        // Create or show output channel
        const outputChannel = vscode.window.createOutputChannel('CodeFr');
        outputChannel.show(true);
        outputChannel.appendLine(`Exécution de ${path.basename(filePath)}...`);
        outputChannel.appendLine('----------------------------------------');

        // Run the interpreter
        const process = exec(`codefr "${filePath}"`, (error, stdout, stderr) => {
            if (error) {
                outputChannel.appendLine(`Erreur d'exécution: ${error.message}`);
                vscode.window.showErrorMessage('Erreur lors de l\'exécution du fichier CodeFr');
                return;
            }
            if (stderr) {
                outputChannel.appendLine(`Erreurs: ${stderr}`);
            }
            if (stdout) {
                outputChannel.appendLine(`Sortie: \n${stdout}`);
            }
            outputChannel.appendLine('----------------------------------------');
            outputChannel.appendLine('Exécution terminée');
        });

        // Handle process events
        process.on('error', (error) => {
            if (error.code === 'ENOENT') {
                outputChannel.appendLine('Erreur: L\'interpréteur CodeFr n\'est pas installé ou n\'est pas dans le PATH');
                vscode.window.showErrorMessage(
                    'L\'interpréteur CodeFr n\'est pas installé. Assurez-vous qu\'il est installé et accessible dans le PATH.'
                );
            } else {
                outputChannel.appendLine(`Erreur: ${error.message}`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
