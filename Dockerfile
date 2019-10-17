FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /app

# copy published app
COPY ./output .

ENV ASPNETCORE_URLS=http://0.0.0.0:PORT
CMD dotnet FinHub.dll --urls http://*:$PORT