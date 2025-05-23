# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];

  # Bootloader.

  # Grub (funzionava su vm parallels ma non su ferro)
  # boot.loader.grub.enable = true;
  # boot.loader.grub.device = "/dev/nvme0n1p1"; # Ricordati di modificare questo nome
  # boot.loader.grub.useOSProber = true;

  # Efi (funziona su ferro)
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  networking.hostName = "nixhost"; # Hostname
  #networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Enable networking
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "Europe/Rome";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";

  i18n.extraLocaleSettings = {
    LC_ADDRESS = "it_IT.UTF-8";
    LC_IDENTIFICATION = "it_IT.UTF-8";
    LC_MEASUREMENT = "it_IT.UTF-8";
    LC_MONETARY = "it_IT.UTF-8";
    LC_NAME = "it_IT.UTF-8";
    LC_NUMERIC = "it_IT.UTF-8";
    LC_PAPER = "it_IT.UTF-8";
    LC_TELEPHONE = "it_IT.UTF-8";
    LC_TIME = "it_IT.UTF-8";
  };

  services.xserver = {
    # Enable the X11 windowing system.
    enable = true;

    displayManager = {
      lightdm.enable = true;
    };

    # displayManager.ly = {
    #   enable = true;
    #   defaultUser = "kevin";
    # };

    # Enable the XFCE Desktop Environment.
    desktopManager = {
      xterm.enable = false;
      xfce.enable = true;
    };

    # Configure keymap in X11
    xkb = {
      layout = "us";
      variant = "";
    };
  };

  services.displayManager.defaultSession = "xfce";

  # Enable CUPS to print documents.
  services.printing.enable = true;

  services.printing.drivers = [ 
    pkgs.gutenprint # — Drivers for many different printers from many different vendors.
    pkgs.gutenprintBin # — Additional, binary-only drivers for some printers.
    pkgs.samsung-unified-linux-driver # — Proprietary Samsung Drivers
    pkgs.splix # — Drivers for printers supporting SPL (Samsung Printer Language).
    pkgs.brlaser # — Drivers for some Brother printers
    pkgs.brgenml1lpr #  — Generic drivers for more Brother printers [1]
    pkgs.brgenml1cupswrapper  # — Generic drivers for more Brother printers [1]
	]; 

  services.avahi = {
    enable = true;
    nssmdns = true;
    openFirewall = true;
    publish = {
      enable = true;
      userServices = true;
    };
  };
  services.printing = {
    listenAddresses = [ "*:631" ];
    allowFrom = [ "all" ];
    browsing = true;
    defaultShared = true;
    browsedConf = ''
    BrowseDNSSDSubTypes _cups,_print
    BrowseLocalProtocols all
    BrowseRemoteProtocols all
    CreateIPPPrinterQueues All
    BrowseProtocols all
      '';
  };
  
  networking.firewall = {
    allowedTCPPorts = [ 631 ];
    allowedUDPPorts = [ 631 ];
  };


  # Enable sound with pipewire.
  hardware.pulseaudio.enable = false;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    # If you want to use JACK applications, uncomment this
    #jack.enable = true;

    # use the example session manager (no others are packaged yet so this is enabled by default,
    # no need to redefine it in your config for now)
    #media-session.enable = true;
  };

  # Bluetooth

  hardware.bluetooth = {
    enable = true;              # enables support for Bluetooth
    powerOnBoot = true;         # powers up the default Bluetooth controller on boot
    settings = {
      General = {
        Experimental = "true";
      };
    };
  };

  services.blueman.enable = true;

  hardware.logitech.wireless.enable = true;

  # Enable touchpad support (enabled default in most desktopManager).
  services.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.kevin = {
    isNormalUser = true;
    description = "Kevin";
    extraGroups = [ "networkmanager" "wheel" "libvirtd"];
    packages = with pkgs; [
      # pacchetti utente

      pkgs.firefox              # browser 1
      pkgs.google-chrome        # browser 2
      
      pkgs.vscode               # editor

      # utility
      pkgs.rofi                 # app launcher
      pkgs.glances              # activity monitor
      pkgs.gparted              # partizionamento dischi
      pkgs.unzip                # utility archive zip
      pkgs.ly                   # display manager
      pkgs.rustdesk             # collegamento remoto
      pkgs.solaar               # dispositivi logitech
      
      # style
      pkgs.neofetch             # terminal system info
      pkgs.powerline-go         # terminal folders hierarch
      pkgs.feh                  # background

      # 4fun
      pkgs.cmatrix              # matrix
      pkgs.hollywood            # hollywood

      # apps
      
    ];
  };

  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    # pacchetti di sistema

    pkgs.git              # git
    pkgs.kitty            # terminale
    pkgs.alacritty        # terminale 2
    pkgs.wpa_supplicant   # rete
    pkgs.blueman          # bluetooth
    pkgs.spice-gtk
  ];

  # Virtualizzazione

  programs.virt-manager.enable = true;

  # users.groups.libvirtd.members = ["kevin"]; # kevin fa già parte del gruppo libvirtd (conf sopra)

  virtualisation.libvirtd.enable = true;
  virtualisation.spiceUSBRedirection.enable = true;

  virtualisation.libvirtd.qemu.vhostUserPackages = [ pkgs.virtiofsd ];  # per abilitare lo share delle cartelle con le vm


  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "24.11"; # Did you read the comment?

}
