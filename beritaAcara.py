from flask import Flask, redirect, url_for, render_template, request, send_from_directory
import os
import pandas
import csv

app = Flask(__name__) 
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

@app.route("/",methods=["GET", "POST"])
def index():
    # if request.method=="POST":
        # gen=gen=request.form['generate']
    return render_template("index.html",selected="0", message="",output="-")

@app.route('/build/<string:filename>')
def download_filse(filename):
    # return folder
    # try:
    #     response = send_from_directory(os.path.join(APP_ROOT),
    #                                    filename=filename)
    #     response.cache_control.max_age = 60  # e.g. 1 minute
    #     return response

    # except:
    #     return str("asd")
    return send_from_directory(os.path.join(APP_ROOT),
                               filename=filename, as_attachment=True)

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

if __name__ == "__main__":
    app.run(debug=True)