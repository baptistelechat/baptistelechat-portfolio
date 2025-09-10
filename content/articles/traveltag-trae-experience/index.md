---
title: "TravelTag & TRAE : Mon Expérience de Développement"
excerpt: "Retour d'expérience sur le développement de TravelTag avec TRAE AI, l'IDE qui a transformé ma façon de coder."
date: "2024-09-10"
author: "Baptiste LECHAT"
tags: ["React", "TypeScript", "TRAE AI", "Développement", "Expérience"]
coverImage: "Capture_1.png"
---

# TravelTag & TRAE : Une aventure technologique

Développer **TravelTag** a été ma première vraie expérience avec un IDE assisté par IA. Grâce à **TRAE IDE**, j’ai découvert une nouvelle façon de coder, plus fluide et motivante, qui a vraiment changé ma manière de travailler.

## 🧳 Le projet TravelTag

**TravelTag** est une application web pour générer des QR Codes contenant des informations personnelles à imprimer et coller sur des bagages, sacs à dos, affaires d’enfants, etc. Conçue initialement pour un usage personnel, elle vise à devenir un outil simple, **offline** et rassurant pour tous.

### 🎯 Contexte & Problème

Je suis parti en vacances cet été et je n’avais pas pris l’avion depuis 16 ans. J’avais peur que mes bagages se perdent pendant un trajet de plus de 6000 km avec de multiples étapes (voiture, navette, avion, taxi, bateau). L’idée de TravelTag est née pour créer une solution **rapide et simple** dans le temps qu’il me restait avant le départ (~2 semaines).  
Le QR Code a été choisi pour **éviter de développer un lecteur spécifique**, puisque la majorité des smartphones intègrent un lecteur de manière native.

J’ai d’abord cherché des solutions existantes : la plupart étaient payantes, stockaient potentiellement les données sur des serveurs externes et nécessitaient de tout saisir à la main, avec le risque d’oublier des informations cruciales en cas de perte. TravelTag répond à ce besoin de **fiabilité, simplicité et confidentialité**.

Le projet s’adresse aux **voyageurs réguliers ou non**, aux **familles** (facilement stressées par le transport de nombreux bagages), et aux **enfants** (pour voyages scolaires ou affaires personnelles). Les cas d’usage sont nombreux et adaptables.

### Stack technique utilisée

- **Frontend** : Vite + React 18 + TypeScript
- **Styling** : Tailwind CSS v4 + shadcn/ui
- **State Management** : Zustand
- **Validation** : Zod avec TypeScript schemas
- **QR Code** : react-qr-code
- **Export** : html-to-image pour PNG
- **Data** : JSON pour aéroports, gares et pays
- **Hooks** : Custom hooks pour la logique métier

### Pourquoi Vite + React ?

| Critère            | Vite                        | Next.js                                  |
| ------------------ | --------------------------- | ---------------------------------------- |
| Type de projet     | SPA léger, prototype rapide | Fullstack, SSR/SSG                       |
| Démarrage & build  | Ultra rapide 🚀             | Plus lent, SSR natif                     |
| Routing            | Géré manuellement           | Automatique via filesystem               |
| Offline            | Simple, pas de SSR          | Plus complexe                            |
| Performance finale | Très performant pour SPA    | Optimisé pour sites statiques/dynamiques |

💡 **Astuce** : pour des apps SPA légères, Vite est parfait. Next.js devient pertinent si SEO ou SSR est nécessaire.

### Gestion des données

- **LocalStorage** : langue sélectionnée pour i18n
- **JSON** : données aéroports (package NPM `airport-iata-codes`), communes et gares françaises récupérées depuis [data.gouv.fr](https://www.data.gouv.fr)

### Défis techniques

- Export PNG et rendu QR Code : plusieurs itérations ont été nécessaires pour obtenir la mise en page désirée.
- Vérification de l’**offline complet** : toutes les dépendances critiques tournent localement, aucun serveur externe requis.

## 🎨 Design & UX

- Minimaliste et fonctionnel
- Formulaire à gauche regroupant 4 catégories d’informations
- Aperçu QR Code en temps réel à droite pour test avant téléchargement
- Retour utilisateur : beaucoup de feedbacks positifs de la famille et de la communauté X

## L'expérience TRAE

### Qu'est-ce que TRAE ?

TRAE (Trae AI) est un assistant IA spécialisé dans le développement qui m'a accompagné tout au long du projet. Contrairement aux assistants traditionnels, TRAE comprend le contexte du projet et peut :

- Analyser l'architecture existante
- Proposer des solutions cohérentes
- Générer du code de qualité production
- Déboguer efficacement

### 🚀 Processus de création avec TRAE

L’idée initiale était un projet personnel rapide, mais j’ai décidé d’en faire une **solution complète** pouvant être partagée. TRAE a été choisi car :

- Je manquais de temps pour créer une solution complète en quelques semaines.
- Je venais de souscrire à TRAE Pro et souhaitais tester l’IDE sur un projet **from scratch**.
- L’IDE m’a permis de générer rapidement du code boilerplate et d’obtenir des suggestions pertinentes pour enrichir le produit.

J’avais une vision de base : nom, prénom, adresse postale, numéro de téléphone et lieux de départ/arrivée. TRAE a ensuite suggéré la **nationalité, les contacts d’urgence, les modes de transport supplémentaires et les informations de santé**.  
J’ai ajouté un **disclaimer** :

> "Vous partagez des données personnelles qui peuvent être lues par un grand nombre de personnes. Vous êtes le seul responsable des données que vous partagez."

La **V1** a été fonctionnelle en **1 weekend**, puis affinée durant la semaine suivante pour améliorer la génération de planches PDF et l’interface utilisateur. TRAE a fortement accéléré la mise en place et le développement des idées.

### Avantages constatés

#### 🚀 Productivité accrue

Avec TRAE, j'ai pu :

- Réduire le temps de développement de **50%**
- Implémenter des fonctionnalités complexes plus rapidement
- Me concentrer sur la logique métier plutôt que sur le code répétitif

#### 🔧 Résolution de problèmes

TRAE excelle dans :

- L'identification rapide des bugs
- La proposition de solutions alternatives
- L'optimisation des performances

## Résultats et apprentissages

### Métriques du projet (à actualiser)

- **Temps de développement** : 1 semaines
- **Lignes de code** : ~2,500
- **Composants React** : 25
- **Tests unitaires** : 85% de couverture

### Apprentissages clés

**L'IA comme partenaire** : TRAE n'est pas un remplaçant mais un amplificateur de compétences
**TRAE** : SOLO Mode pour lancer le projet, puis Mode Classique CHAT avec agent Builder + MCP pour itérer.  
**Architecture modulaire** : L'importance d'une structure claire pour faciliter la collaboration avec l'IA
**Conseil de dev** : rester sur l’essentiel pour un MVP. Utiliser un **KANBAN** pour séparer les fonctionnalités V1 (essentielles) et futures améliorations. 
**Hooks/Zustand/Zod** : organiser la logique métier et la validation des données.

## Perspectives d'avenir

### Impact et évolutions prévues pour TravelTag

- TravelTag a été utilisé avec succès lors de mon voyage.  
- Fonctionnalités futures possibles : mode sombre, identité visuelle propre, amélioration de l’interface.  
- Objectif : rester un projet personnel mais facilement partageable.

### TRAE et l'avenir du développement

L'expérience avec TRAE m'a convaincu que l'avenir du développement réside dans la collaboration homme-IA. Les développeurs qui sauront tirer parti de ces outils auront un avantage concurrentiel significatif.

## Conclusion

Le développement de TravelTag avec TRAE a été une premère expérience et un test réussi au la main. Cette collaboration a non seulement accéléré le développement mais aussi amélioré considérablement la qualité de mon code final.

**Recommandations pour les développeurs** :

- Expérimentez avec les assistants IA
- Maintenez une architecture claire
- Continuez à apprendre et à vous adapter

---

_Vous souhaitez en savoir plus sur TravelTag ou TRAE ? N'hésitez pas à me contacter !_

**Liens utiles :**

- [Démo TravelTag](https://traveltag.vercel.app)
- [Code source](https://github.com/baptistelechat/traveltag)
- [Documentation TRAE](https://trae.ai/docs)
