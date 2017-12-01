# Senac RS - Sistemas Distribuídos

## Urna Distribuída

## Start DB

```
$ docker run -p 5433:5432 --name postgres-local \
    -e POSTGRES_USER=root \
    -e POSTGRES_PASSWORD=toor \
    -e POSTGRES_DB=urna_distribuida \
    -d postgres
```