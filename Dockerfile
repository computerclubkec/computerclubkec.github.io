FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll

COPY Gemfile /srv/jekyll/

RUN jekyll build

# COPY Gemfile.lock /srv/jekyll

RUN bundle install

EXPOSE 4000