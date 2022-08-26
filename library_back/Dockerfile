FROM python:latest

WORKDIR /app

COPY . .

RUN apt-get install libpq-dev -y

RUN python3 -m venv env
RUN . env/bin/activate

RUN chmod +x *.sh

RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

EXPOSE 8000
