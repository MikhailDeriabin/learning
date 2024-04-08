FROM --platform=$BUILDPLATFORM python:3.10-slim-bullseye

WORKDIR /code

COPY ./backend/requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./backend ./

EXPOSE 5000
CMD [ "python", "-m" , "flask", "run", "--host=0.0.0.0", "--port", "5000"]
