FROM nginx

RUN mkdir "/etc/nginx/templates"

COPY default.conf.template /etc/nginx/templates

COPY dist/ /usr/share/nginx/html

#   npm i
#   npm run build
#   docker image build --tag react-vite-env .
#   docker container run -d -p 9001:80 -e API_URL="<YOUR_API_URL>" --name frontend react-vite-env