export const docs = () => {
	return app.gulp.src(`${app.path.buildFolder}/**/*`)
		// Перша pipe - копіює файли в папку build
		.pipe(app.gulp.dest(app.path.buildFolder))
		// Друга pipe - копіює файли в папку docs
		.pipe(app.gulp.dest('docs'));
}