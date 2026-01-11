all: dist/index.cjs dist/index.d.ts dist/index.js

dist/%: src/index.ts
	rollup -c

demo: all demo/bundle.js demo/bundle.js.map

demo/bundle.%: demo/demo.js
	rollup -c demo-rollup.config.js

check: all
	mocha test/test.js

clean:
	rm -rf demo/bundle.js* dist

.PHONY: all demo clean
