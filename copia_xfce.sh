# cp -R path_to_source path_to_destination/

echo - Copio le cartelle delle configurazioni xfce nel git repo
echo

sudo cp -rf ~/.config ~/konfs/
sudo cp -rf ~/.themes ~/konfs/
sudo cp -rf ~/.icons ~/konfs/
# cp -rf ~/.local/share/fonts ~/konfs/

echo
echo - copia_xfce.sh eseguito!