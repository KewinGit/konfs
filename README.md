# konfs

## Generali

### Passaggi primo avvio

1. nel file `/etc/nixos/configuration.nix` aggiungere il pacchetto `git`
2. nella ~/ home fare il clone del repo `konfs`
3. eseguire lo script `aggiorna.sh`
4. eseguire lo script `incolla_konfs.sh`
5. nel file `/etc/nixos/configuration.nix` cambiare il valore con il nome dell'unità root presente sul computer. (eseguendo un `df` fa la lista delle unità, guarda quella con "Mounted on" = / , dovrebbe essere tipo /dev/nome)
    ``` nix
    boot.loader.grub.device = "/dev/sda";  # <---- cambiare
    ```

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
feh --bg-fill ~/konfs/sfondo_nixos_black.png
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
