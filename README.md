# Nido — Budget familiare

App web in italiano per entrate, spese, riepiloghi mensili, budget per categoria, ricerca ed esportazione/importazione JSON.

## Avvio

Richiede Node.js 22 o successivo, nessuna dipendenza da installare.

```sh
npm start
```

Server sulla porta 3000 (personalizzabile con `PORT`). Test: `npm test`.

I dati sono salvati nel localStorage del browser e non vengono inviati al server. I budget per categoria sono limiti mensili ricorrenti. Per trasferire o conservare i dati usa Esporta dati; Importa dati sostituisce l'archivio dopo conferma. Non sono presenti account, sincronizzazione tra dispositivi o collegamenti bancari. I font remoti sono facoltativi: in assenza di rete viene usato il font di sistema.

## Deploy su Render

Il file `render.yaml` definisce un Web Service Node.js sul piano Free.
Dopo aver pubblicato questi file su GitHub:

1. Accedi a Render e scegli **New → Blueprint**.
2. Collega il repository `marco983/Family` e seleziona il branch che contiene l'app.
3. Controlla il piano Free e conferma la creazione.
4. Attendi il completamento del deploy e apri l'indirizzo HTTPS fornito da Render.

Il build esegue i test; il server usa la porta `PORT` assegnata da Render.
Non servono chiavi API o database. Il servizio gratuito può andare in sospensione quando non è usato.
I dati rimangono nel browser: quelli inseriti in un altro indirizzo non si trasferiscono automaticamente; usa esportazione e importazione.
