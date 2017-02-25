install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
	npm run babel-node -- src/bin/brain-even.js
	npm run babel-node -- src/bin/brain-calc.js
	npm run babel-node -- src/bin/brain-gcd.js
	npm run babel-node -- src/bin/brain-balance.js
	npm run publish
lint:
	npm run eslint
