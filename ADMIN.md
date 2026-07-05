# Administration du contenu — Côté Bien N'être

Le contenu du site (textes + images) est éditable via **Sveltia CMS**, une interface
disponible sur **`/admin`**. Chaque modification crée un **commit GitHub**, ce qui
déclenche un **redéploiement Vercel automatique** (en ligne ~1 min plus tard).

## Où vit le contenu ?

Tout est centralisé dans le dossier **`content/`** (fichiers JSON) :

| Fichier | Contenu |
|---|---|
| `settings.json` | Coordonnées, téléphone, e-mail, lien Resalib, réglages |
| `prestations.json` | Grille tarifaire + grands blocs de la page Prestations |
| `audiences.json` | Cartes « Pour qui ? » de l'accueil |
| `faq.json` | Foire aux questions |
| `reviews.json` | Avis clients |
| `values.json` | « Ce qui me guide » (À propos) |
| `steps.json` | Étapes « Comment ça se passe » |

Les modules `src/lib/data/*.js` ne font que **ré-exporter** ces JSON : aucun composant
n'a besoin d'être modifié, l'affichage ne change pas.

## Prévisualiser l'interface EN LOCAL (sans GitHub)

Grâce à `local_backend: true`, Sveltia peut éditer directement les fichiers du repo
via l'API « File System Access » du navigateur — **aucun serveur supplémentaire** :

1. `npm run dev`
2. Ouvrir dans **Chrome ou Edge** (navigateurs Chromium) :
   **http://localhost:5173/admin/index.html**
   > ⚠️ En local, bien mettre `/admin/index.html` (le `/admin/` seul renvoie 404 en dev ;
   > en production sur Vercel, `/admin/` fonctionne tout seul).
3. Cliquer **« Work with Local Repository »** et sélectionner le dossier du projet.
4. Les modifications sont écrites dans `content/` et `static/images/` ; c'est vous qui
   committez ensuite.

## Mettre la connexion GitHub en ligne (à faire une fois)

Pour que la cliente se connecte sur `/admin` en production, il faut une **GitHub OAuth App** :

1. GitHub → *Settings* → *Developer settings* → *OAuth Apps* → **New OAuth App**
   - **Application name** : `Côté Bien N'être — CMS`
   - **Homepage URL** : l'URL du site (ex. `https://…vercel.app` ou `https://www.cotebiennetre.fr`)
   - **Authorization callback URL** : `<URL du site>/api/callback`
2. Récupérer **Client ID** et générer un **Client Secret**.
3. Dans Vercel → *Settings* → *Environment Variables*, ajouter :
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
4. Ajuster `base_url` dans `static/admin/config.yml` sur l'URL de production.

> ⚠️ L'endpoint `/api/auth` + `/api/callback` qui gère cet échange est ajouté à
> l'**increment 2** (bascule `adapter-vercel`).

## ⚠️ Conformité marque Technique MEBP®

Les photos de séances MEBP® doivent avoir leurs **routines visuelles (pictogrammes)
floutées** avant publication (règle du guide de marque). Le CMS ne floute pas
automatiquement : **toute nouvelle photo MEBP® doit être validée / floutée par Lulu**
avant mise en ligne.
