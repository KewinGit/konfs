echo - Aggiorno dal repository remoto
echo
sudo git pull

echo
echo - Creo cartella per la configurazione nix
sudo mkdir -p /etc/nixos

echo
echo - Copio la configurazione di nixos: configuration.nix
sudo cp ~/konfs/configuration.nix /etc/nixos/configuration.nix

echo
echo Aggiornamento completato!