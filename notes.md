aws --profile rdok s3 sync . s3://indecision-rdok  --exclude "*node_modules/*" --exclude "*.idea/*"  --exclude "*.git/*" --delete
