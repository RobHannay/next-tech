touch ~/.zshrc
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

cd ~
git clone https://github.com/RobHannay/next-tech.git
cd next-tech

nvm install 20
corepack enable
pnpm install
pnpm dev