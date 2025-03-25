# konfs

## Generali

### Passaggi primo avvio

1. nel file `/etc/nixos/configuration.nix` aggiungere il pacchetto `git`
2. nella ~/ home fare il clone del repo `konfs`
3. eseguire lo script `aggiorna.sh`
4. eseguire lo script `incolla_konfs.sh`

#### Boot loader

Su parallels funzionava bene il grub ma sul ferro no, quindi:

1. Funziona il grub, allora:

   nel file `/etc/nixos/configuration.nix` cambiare il valore con il nome dell'unità root presente sul computer. (eseguendo un `df` fa la lista delle unità, guarda quella con "Mounted on" = /boot , dovrebbe essere tipo /dev/nome)
    ``` nix
    boot.loader.grub.enable = true;
    boot.loader.grub.device = "/dev/sda";  # <---- cambiare
    boot.loader.grub.useOSProber = true;
    ```

2. Non funziona il grub, allora:

    usare l'efi
    ``` nix
    boot.loader.systemd-boot.enable = true;
    boot.loader.efi.canTouchEfiVariables = true;
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

## Virtualizzazione

Nella creazione di una vm Windows aggiungere i driver Virtio:

[Virtio driver iso](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/?C=M;O=A)

Da dentro la vm windows:

- Eseguire l'agent Virtio

  [virtio-win-guest-tools.exe](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/virtio-win-0.1.266-1/)

- Eseguire l'agent spice
  
  [Spice](https://www.spice-space.org/download.html)
  
  [Spice guest tools](https://www.spice-space.org/download/windows/spice-guest-tools/spice-guest-tools-latest.exehttps://www.spice-space.org/download/windows/spice-guest-tools/spice-guest-tools-latest.exe)

## Xfce

### Cartelle configurazioni
```
~/.config
~/.themes
~/.icons
```

Non serve per ora
```
~/.local/share/fonts
```