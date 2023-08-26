import flask
from flask import Flask, request
from flask_restful import Api, Resource, reqparse
import allin
import allintitle
import allinurl
import organisation
import cache
import searching
import sitek
import sources
import title
import general

app = Flask(__name__)
api = Api()


@app.route('/', methods=['GET'])
def get():
    return {'goto': '/main'}


@app.route('/main', methods=['POST'])
def post():
    method = request.json['func']
    params = request.json['params']
    if method == 'org':
        try:
            # return organisation.orginfo(params['TIN'], params['counts'], params['filename'])
            return flask.send_file('test.html')
        except:
            return 'err'
    if method == 'allin':
        try:
            return allin.text(params['topic'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'allintitle':
        try:
            return allintitle.title(params['topic'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'allinurl':
        try:
            return allinurl.url(params['topic'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'cache':
        try:
            return cache.cache_search(params['topic'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'filetype':
        try:
            return searching.filetype(params['topic'], params['filetype'], params['counts'])
        except:
            return 'err'
    if method == 'sitek':
        try:
            sitek.posint(params['topic'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'sources':
        try:
            sources.resourse(params['topic'], params['source'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'title':
        try:
            title.pos(params['topic'], params['counts'], params['filename'])
        except:
            return 'err'
    if method == 'general':
        try:
            general.searcher(params['topic'], params['counts'], params['filename'], params['keywords'], params['r'], params['count'])
        except:
            return 'err'




    return method



if __name__ == '__main__':
    app.run(debug=True, port=8080, host='127.0.0.1')
