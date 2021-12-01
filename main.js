import { aff_bulletin } from "./aff_bulletin.js";
import { aff_carnet } from "./aff_carnet.js";
import { generale } from "./aff_generale.js";
import { aff_matiere } from "./aff_matieres.js";

let etudiant = {
    "name": "romain",
    "lastname": "stepher",
    "adresse": {
      "city": "epinal",
      "street": "rue de la porte",
      "country": "Fr",
      "num": 6
    },
    "contact": {
      "parent": {
        "name": "bertrand",
        "role": "father",
        "lastname": "stepher",
        "num": 33724352121
      }
    },
    "classRoom": {
      "section": 4,
      "className": "4D"
    },
    "bulletin": {
      "Francais": {
        "comment": ".... RAS bon element",
        "note": [
          14,
          12,
          10,
          7,
          9
        ]
      },
      "math": {
        "comment": "peux mieux faire ...",
        "note": [
          8,
          9,
          12,
          11,
          13,
          8
        ]
      },
      "histoire": {
        "comment": " ne s'interresse pas ... aucun effort ",
        "note": [
          9,
          7,
          12,
          6,
          14
        ]
      }
    },
    "carnet": {
      "info": [
        {
          "note": "pas de cour de francais, la semaine prochaine",
          "date": "12/05/2021",
          "author": {
            "lastName": "Franre",
            "role": [
              "professeur" ,
              "Francais"
            ]
          }
        },
        {
          "note": "comportement à la recreation voilent avec ses camarades",
          "date": "21/08/2021",
          "author": {
            "lastName": "grey",
            "role": [
              "administration",
              "surveillant"
            ]
          }
        }
      ]
    }
  };

let data = etudiant;

aff_bulletin(data);
aff_matiere(data);
generale(data);
aff_carnet(data);
