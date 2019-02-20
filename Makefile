deploy:
	ng build --prod --output-path docs --deploy-url /ping-pong/ --base-href /ping-pong/
	cp docs/index.html docs/404.html
	git add docs/
	git commit -m "Deploying built app.."
	git push
