import path from 'path';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
	return app.gulp
		.src(
			[`${app.path.src.images}**/*.{jpg,jpeg,png,webp,gif,svg}`, `!${app.path.src.images}svg/**/*`],
			{ encoding: false },
		)
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Images',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if((file) => ['.jpg', '.jpeg', '.png'].includes(path.extname(file.path)), webp()),
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				imagemin({
					progressive: true,
					optimizationLevel: 3,
					verbose: true,
				}),
			),
		)
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
