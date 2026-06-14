if [ -z "$1" ]; then
  echo "NEED ARG WITH HASH"
  exit 1
fi

mv index.ts temp.ts
npx api install "@solidarity-tech/v1.0#$1" --lang ts --yes
mv temp.ts index.ts
