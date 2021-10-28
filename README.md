# Cita previa TIE

A tool to autofill form for the appointments in the Spain's national police web site.

## Requirements

* NodeJS >= 14.x

## Usage

```sh
git clone git@github.com:sviridoff/cita-previa-tie.git
cd cita-previa-tie

yarn install
```

Now fill the `config.json` file with proper values.

> You can take the availables values for the following fields `city`, `process`, `country` and `placeAddress` from the official Cita Previa [form](https://sede.administracionespublicas.gob.es/icpplus/index.html).

And run the job:

```sh
yarn run start:quest
```


