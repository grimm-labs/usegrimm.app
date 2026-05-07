---
title: "Qu'est ce qu'un mempool ?  "
description: "Le mempool ce mécanisme est le cœur battant de la file d'attente du réseau."
date: "2026-05-04"
author: "Jonathan Nenba"
tags: ["bitcoin", "mempool", "blockchain" ]
coverImage: "/images/blog/c-est-quoi-un-mempool.png"
isPublished: true

---


# Qu'est ce qu'un mempool ?

Le **Mempool** est la contraction de Memory Pool (pool de mémoire). Il désigne l'espace de stockage temporaire où sont regroupées toutes les transactions qui n'ont pas encore été validées par un mineur (ou un validateur).

Lorsqu'on envoie des bitcoins ou tout autre monnaie, la transaction ne va pas directement dans la blockchain. Elle est d'abord diffusée sur le réseau et atterrit dans le Mempool de chaque nœud.


### Pourquoi le mempool est-il important ?

**1. Elle détermine le temps d’attente**

Plus la mempool est chargée : plus il y a de transactions en attente, plus le délai peut être long.

**2. Il influence les frais**

Quand la mempool est saturée : les utilisateurs augmentent les frais pour être prioritaires, Cela crée une compétition.

**3. Il reflète l’activité du réseau**

**Une mempool pleine signifie :** forte utilisation du réseau, nombreuses transactions.


### Comment fonctionne le mempool ?

Chaque nœud d'un réseau blockchain (comme celui de Bitcoin) gère son propre mempool. Le processus est le suivant :

- **Diffusion de la transaction** : Lorsqu'un utilisateur envoie une transaction (par exemple, des bitcoins à une autre adresse), celle-ci est d'abord diffusée à tous les nœuds du réseau.

- **Validation et stockage** : Chaque nœud reçoit la transaction, la vérifie pour s'assurer qu'elle est valide (solde suffisant, signature correcte, etc.), puis l'ajoute à sa propre mempool.

- **Sélection par les mineurs/validateurs** : Les mineurs (sur les blockchains Proof-of-Work comme Bitcoin) ou les validateurs (sur les blockchains Proof-of-Stake comme Ethereum) examinent les transactions dans le mempool pour choisir lesquelles inclure dans le prochain bloc à créer.

- **Priorisation des frais** : En général, les mineurs ou validateurs priorisent les transactions qui offrent les frais de transaction les plus élevés. C'est une incitation économique pour eux, car ils reçoivent ces frais en récompense.

**Le rôle crucial des frais** : C'est ici que le Mempool devient un véritable marché aux enchères. Comme l'espace dans chaque bloc est limité (environ 1 Mo pour Bitcoin), les mineurs cherchent à maximiser leurs profits. Plus les frais attachés à votre transaction sont élevés, plus vite elle sera extraite du Mempool pour être intégrée dans un bloc.

Si des milliers de personnes envoient des fonds en même temps, le Mempool se remplit. Les transactions avec des frais trop bas restent "bloquées" dans la salle d'attente pendant des heures, voire des jours.

- **Confirmation** : Une fois qu'une transaction est incluse dans un bloc et que celui-ci est ajouté à la blockchain, elle est considérée comme confirmée. Elle est alors retirée du mempool de tous les nœuds du réseau.


### Pourquoi est-il important de surveiller le Mempool ?

Pour un utilisateur averti, consulter l'état du Mempool (via des outils comme mempool.space) permet de :

**Économiser de l'argent** : Si le Mempool est vide, vous pouvez envoyer une transaction avec des frais minimaux.

**Estimer le temps d'attente** : Comprendre si votre transaction sera validée dans 10 minutes ou 5 heures.

**Éviter les erreurs** : Comprendre pourquoi une transaction semble "disparue" alors qu'elle attend simplement son tour.


### Conclusion

Le mempool est une pièce essentielle du fonctionnement de Bitcoin. Il agit comme une salle d’attente où les transactions patientent avant d’être confirmées. 
Il influence : la vitesse des transactions,les frais,l’expérience utilisateur
Comprendre la mempool, c’est mieux comprendre pourquoi une transaction peut être rapide ou prendre du temps. Plus qu’un simple détail technique, elle est au cœur de la dynamique du réseau Bitcoin.



















