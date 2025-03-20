# konfs

## Generali

### Clonare repo
``` bash
cd ~
git clone https://github.com/KewinGit/konfs.git
```

## Nix

### Copiare configurazione nix
``` bash
sudo cp ~/konfs/configuration.nix /etc/nixos/configuration.nix
```

### Elimina le generazioni piu vecchie di 15 giorni
``` bash
sudo nix-collect-garbage --delete-older-than 15d
```