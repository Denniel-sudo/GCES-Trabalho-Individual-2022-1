FROM python:latest

WORKDIR /library_back

COPY . /library_back
COPY accounts/ /library_back/accounts
COPY books/ /library_back/books
COPY src/ /library_back/src
COPY entrypoint.sh /library_back

RUN apt-get install libpq-dev -y

RUN python3 -m venv env
RUN . env/bin/activate

RUN chmod +x *.sh

RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

EXPOSE 8000
