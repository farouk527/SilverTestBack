# Application Backend SilverTest

Ceci est la partie backend de l'application SilverTest. Elle est construite avec Node.js, TypeScript, Express.js et MongoDB. Le backend gère l'authentification, la gestion des utilisateurs, et la communication avec la base de données.

## Prise en main

### Cloner le dépôt

Clonez le dépôt sur votre machine locale :

```bash
https://github.com/farouk527/SilverTestBack.git
```

### Installer les dépendances

Accédez au répertoire du projet et installez les packages nécessaires :

```bash
cd SilverTestBack
npm install
```

###

Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement suivantes :

```env
PORT=8000
MONGO_URL=mongodb://127.0.0.1/TestTechnique
JWT_SECRET=123456
```

### Utilisation d'une base de données MongoDB

- **Base de données sur le cloud (MongoDB Atlas)** : Si vous souhaitez utiliser la base de données déjà configurée, veuillez me demander d'ajouter votre adresse IP à la liste autorisée sur MongoDB Atlas.
- **Base de données locale** : Vous pouvez utiliser une base de données MongoDB locale en modifiant le fichier `config/connectToDb.ts` :

```javascript
//const uri = process.env.MONGO_URL;
```

Décommentez la ligne ci-dessus et configurez correctement votre fichier `.env`.

### Démarrer le serveur

Lancez le serveur backend en mode développement :

```bash
npm run dev
```

Le serveur sera disponible par défaut à l'adresse `http://localhost:8000`.

---

## Hébergement

Le backend est hébergé sur Render et est accessible via :

[Backend SilverTest sur Render](https://silvertestback.onrender.com)

**Note :** L'hébergement gratuit sur Render peut entraîner des délais de réponse (jusqu'à 50 secondes ou plus) pour la première requête en cas d'inactivité prolongée.

---

## API(s)

Le backend expose les API suivantes :

- **POST /api/register** : Inscription d'un nouvel utilisateur.
- **POST /api/login** : Connexion d'un utilisateur existant.
- **GET /api/objects** : Récupération des objets.
- **POST /api/objects** : Création d'un nouvel objet.
- **PUT /api/objects/\*\*\*\*****:id** : Mise à jour d'un objet.
- **DELETE /api/objects/\*\*\*\*****:id** : Suppression d'un objet.

Consultez la documentation complète des API pour plus de détails.

---

## Notes

1. **Base de données MongoDB Atlas** : Si vous utilisez MongoDB Atlas, configurez correctement l'accès IP et les informations d'identification.
2. **Hébergement sur Render** : Préparez-vous à des délais sur les premières requêtes lors de l'utilisation des API(s) hébergées.
3. **Mode local** : Assurez-vous que MongoDB est installé et en cours d'exécution localement si vous optez pour une base de données locale.

---

## Contribution

Si vous rencontrez des problèmes ou avez des suggestions d'amélioration, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur le dépôt.

---

## Licence

Ce projet est sous licence [MIT License](LICENSE).

