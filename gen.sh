echo "スライド名を入力してください"

rm -rf packages/template/temp
rm -rf packages/template/node_modules
rm -rf packages/template/picture

read slide_name
SLIDE_NAME=$slide_name
echo "スライド名は$SLIDE_NAMEです"
FILE_NAME="docs-$slide_name"
echo "スライドを生成します"
rm -rf packages/$FILE_NAME
cp -r packages/template packages/$FILE_NAME
sed -i "s/test-slidev/$SLIDE_NAME/g" "packages/$FILE_NAME/package.json"

git add packages/$FILE_NAME/**
