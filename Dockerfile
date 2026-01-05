FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN ./node_modules/.bin/next build

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

CMD ["node", ".next/standalone/server.js"]
