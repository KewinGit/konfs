# konfs

## Generali

### Clonare repo
``` bash
cd ~
git clone https://github.com/KewinGit/konfs.git
```

### Aggiorna configurazioni dal repo
``` bash
sh ~/konfs/aggiorna.sh
```

### Copiare configurazione nix
``` bash
sudo cp ~/konfs/configuration.nix /etc/nixos/configuration.nix
```

### Sfondo
``` bash
exec feh --bg-fill ~/konfs/sfondo_nixos_black.png
```

### Scompattare tar
``` bash
tar -xvzf filename.tar.gz
```

## Nix
Documentazione: [Nixos-Rebuild](https://nixos.wiki/wiki/Nixos-rebuild)

### Applicare la configurazione
``` bash
sudo nixos-rebuild switch
```

### Testare la configurazione
``` bash
sudo nixos-rebuild test
```

### Elenco generazioni
``` bash
sudo nixos-rebuild list-generations
```

### Elimina le generazioni piu vecchie di 15 giorni
``` bash
sudo nix-collect-garbage --delete-older-than 15d
```

## Xfce

### Cartelle configurazioni
```
~/.config/xfce4
~/.config
~/.themes
~/.icons
~/.local/share/fonts
```
