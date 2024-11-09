# CodeFr - Extension VSCode

## Description
CodeFr est une extension Visual Studio Code qui fournit le support du langage CodeFr, un langage algorithmique en français conçu pour l'apprentissage de la programmation. Cette extension facilite l'écriture et la lecture des algorithmes en français avec une coloration syntaxique avancée, des snippets de code et des fonctionnalités d'édition pratiques.

## Fonctionnalités

### 1. Coloration Syntaxique
- Mots-clés du langage (`Algorithme`, `Variable`, `Debut`, `Fin`, etc.)
- Types de données (`Entier`, `Decimal`, `Chaine`, `Logique`)
- Opérateurs (arithmétiques, logiques, comparaison)
- Fonctions intégrées
- Chaînes de caractères
- Commentaires (ligne simple et bloc)
- Nombres

### 2. Snippets de Code
Utilisez ces préfixes pour accéder rapidement aux modèles de code :

| Préfixe    | Description                                   |
|------------|-----------------------------------------------|
| `algo`     | Modèle de base d'un algorithme                |
| `si`       | Structure Si-Alors                            |
| `sisi`     | Structure Si-Alors-Sinon                      |
| `sisinon`  | Structure Si-Alors-SinonSi-Sinon             |
| `pour`     | Boucle Pour                                   |
| `tantque`  | Boucle TantQue                               |
| `selon`    | Structure Selon-Cas                           |
| `tab1`     | Déclaration de tableau 1D                     |
| `tab2`     | Déclaration de tableau 2D                     |

### 3. Configurations Pratiques
- Auto-complétion des parenthèses et guillemets
- Indentation automatique
- Repliage de code (code folding)
- Commentaires toggleables (Ctrl+/)
- Correspondance des parenthèses et accolades

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
5. Sélectionnez le fichier .vsix téléchargé

## Utilisation

### Création d'un Nouveau Fichier
1. Créez un nouveau fichier avec l'extension `.algo`
2. Le support du langage CodeFr s'active automatiquement
3. Commencez à taper `algo` pour utiliser le snippet de base

### Exemples de Snippets

#### Modèle d'Algorithme de Base
```
algo⇥
```
Génère :
```
Algorithme NomAlgorithme

Variable
    variable: type

Debut
    
Fin
```

#### Structure Conditionnelle
```
si⇥
```
Génère :
```
Si condition Alors
    
FinSi
```

#### Boucle Pour
```
pour⇥
```
Génère :
```
Pour i De debut A fin Faire
    
FinPour
```

## Raccourcis Clavier Utiles

| Raccourci      | Action                                     |
|----------------|---------------------------------------------|
| Ctrl+/         | Commenter/décommenter la ligne              |
| Ctrl+Space     | Afficher les suggestions                    |
| Tab           | Accepter la suggestion/Indenter             |
| Shift+Tab     | Désindenter                                 |
| Ctrl+F        | Rechercher                                  |
| Ctrl+H        | Remplacer                                   |

## Configuration

L'extension s'active automatiquement pour les fichiers `.algo`. Si vous souhaitez l'utiliser avec d'autres extensions de fichiers, ajoutez cette configuration dans votre `settings.json` :

```json
"files.associations": {
    "*.algo": "codefr"
}
```

## Problèmes Connus

- La coloration syntaxique peut parfois être incorrecte dans des expressions complexes
- L'indentation automatique peut nécessiter des ajustements manuels dans certains cas

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer cette extension :

1. Forkez le dépôt
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## Support

Si vous rencontrez des problèmes ou avez des suggestions :
- Ouvrez une issue sur GitHub
- Envoyez un email à [nitoua.dev@gmail.com]

## Licence

Cette extension est distribuée sous la licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Versions

### 1.0.0
- Support initial du langage CodeFr
- Coloration syntaxique
- Snippets de base
- Auto-complétion

### 1.1.0
- Ajout du support des tableaux
- Nouveaux snippets
- Amélioration de la coloration syntaxique
- Correction de bugs

## Auteurs

- Normich ITOUA - *Travail initial*

## Remerciements

- L'équipe VS Code pour leur excellent éditeur
- La communauté CodeFr pour leurs retours et suggestions
