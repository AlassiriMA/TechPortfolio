source "https://rubygems.org"

# To update to the latest github dependencies run: `bundle update`
gem "github-pages", group: :jekyll_plugins

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# kramdown v2 ships without the gfm parser by default
gem "kramdown-parser-gfm"

# Theme
gem "minima"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end