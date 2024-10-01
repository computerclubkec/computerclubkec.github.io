FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll

COPY Gemfile /srv/jekyll/

RUN jekyll build

RUN bundle install

EXPOSE 4000