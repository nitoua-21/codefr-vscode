# CodeFr - Extension VSCode

## Description
CodeFr est une extension Visual Studio Code qui fournit le support du langage CodeFr, un langage algorithmique en français conçu pour l'apprentissage de la programmation. Cette extension facilite l'écriture et la lecture des algorithmes en français avec une coloration syntaxique avancée, des snippets de code et des fonctionnalités d'édition pratiques.

## Fonctionnalités

### 1. Coloration Syntaxique
- Mots-clés du langage (`Algorithme`, `Variable`, `Debut`, `Fin`, etc.)
- Types de données (`Entier`, `Decimal`, `Chaine`, `Caractere`, `Logique`)
- Opérateurs (arithmétiques, logiques, comparaison)
- Fonctions intégrées
- Modules et importations
- Chaînes de caractères
- Commentaires (ligne simple et bloc)
- Nombres et constantes (`Vrai`, `Faux`, `Null`)

### 2. Snippets de Code
Utilisez ces préfixes pour accéder rapidement aux modèles de code :

| Préfixe     | Description                                   |
|-------------|-----------------------------------------------|
| `algo`      | Template de base d'un algorithme              |
| `si`        | Structure Si-Alors                            |
| `sisi`      | Structure Si-Alors-Sinon                      |
| `sisinon`   | Structure Si-Alors-SinonSi-Sinon             |
| `pour`      | Boucle Pour avec pas optionnel               |
| `tantque`   | Boucle TantQue                               |
| `selon`     | Structure Selon-Cas                           |
| `tab1`      | Déclaration de tableau 1D                     |
| `tab2`      | Déclaration de tableau 2D                     |
| `fonction`  | Fonction avec valeur de retour               |
| `procedure` | Procédure sans retour                        |
| `module`    | Création d'un module                         |
| `importer`  | Importation d'un module                      |

### 3. Fonctions Intégrées
#### Mathématiques
- `Racine(x)`, `Sin(x)`, `Cos(x)`, `Tan(x)`
- `Log(x)`, `Log10(x)`, `Exp(x)`
- `Abs(x)`, `Arrondi(x)`, `Plafond(x)`, `Plancher(x)`
- `Puissance(x, y)`, `Alea()`

#### Chaînes de Caractères
- `Longueur(chaine)`
- `Concatener(chaine1, chaine2)`
- `SousChaine(chaine, debut, longueur)`
- `Majuscule(chaine)`, `Minuscule(chaine)`
- `Remplacer(chaine, ancien, nouveau)`
- `Rechercher(chaine, motif)`
- `Inverser(chaine)`
- `EstNumerique(chaine)`
- `ConvertirEnNombre(chaine)`
- `ConvertirEnChaine(valeur)`

### 4. Configurations Pratiques
- Auto-complétion des parenthèses et guillemets
- Indentation automatique pour toutes les structures
- Pliage de code pour toutes les structures (Si, Pour, TantQue, Fonction, Module)
- Commentaires toggleables (Ctrl+/)
- Correspondance des parenthèses et accolades
- Exécution rapide des fichiers (F5 ou bouton Play)

## Installation

### Depuis le Marketplace VS Code
1. Ouvrez VS Code
2. Appuyez sur Ctrl+P
3. Collez : `ext install codefr`
4. Appuyez sur Entrée

### Installation Manuelle
1. Téléchargez le fichier .vsix
2. Ouvrez VS Code
3. Appuyez sur Ctrl+Shift+P
4. Tapez "Extensions: Install from VSIX"

## Utilisation
1. Créez un nouveau fichier avec l'extension `.cfr`
2. Commencez à écrire votre code en utilisant les snippets
3. L'extension activera automatiquement la coloration syntaxique et les autres fonctionnalités
4. Pour exécuter votre code :
   - Appuyez sur F5
   - Cliquez sur le bouton Play dans la barre d'outils
   - Clic droit > Exécuter le fichier CodeFr
   
Note : Assurez-vous que l'interpréteur `codefr` est installé et accessible dans votre PATH.

## Documentation
Pour une documentation complète du langage CodeFr, consultez le fichier [codefr_description.md](codefr_description.md).

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :
1. Forker le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Créer une Pull Request

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact
- Auteur : Normich ITOUA
- Email : nitoua.dev@gmail.com
- GitHub : [github.com/nitoua-21/codefr-vscode](https://github.com/nitoua-21/codefr-vscode)
