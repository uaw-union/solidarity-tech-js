let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/archive/871b9fd269ff6246794583ce4ee1031e1da71895.tar.gz";

  pkgs = import nixpkgs { config = {}; overlays = []; };
in


pkgs.mkShellNoCC {
  packages = with pkgs; [
    # Lang Tools
    typescript-language-server
    nodePackages.prettier
    biome

    # Programming Languages
    nodejs_22
    bun

    k9s
    pulumi
    pulumiPackages.pulumi-language-nodejs
    doctl
    kubectl
    jq
  ];
}
