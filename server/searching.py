import urllib.error
import pymorphy3
from googlesearch import search
import pandas as pd
import numpy as np
from tabulate import tabulate
import requests
import random
import wget
import subprocess
import http.client


def filetype(query, res, num):
    if query != "":
        lst = query.split()
        threshold = 0.66
        scores = []

        morph = pymorphy3.MorphAnalyzer()
        for word in lst:
            p = morph.parse(word)
            result = p[0].score
            scores.append(result)

        res = np.sum(scores)
        if res >= len(lst) * threshold:
            kinds = ["odt(0)", "pdf(1)", "xlsx(2)", "csv(3)", "docx(4)", "pptx(5)", "doc(6)"]
            kinds1 = ["odt", "pdf", "xlsx", "csv", "docx", "pptx", "doc"]
            for i in kinds:
                print(i)
            if res != "":
                if res.isdigit():
                    res = int(res)
                    if 0 <= res < len(kinds1):
                        res1 = kinds1[res]
                        mass = [query, res1]
                        query_n = "".join(mass)
                        if num != "":
                            if num.isdigit():
                                num = int(num)
                                if num > 0:
                                    try:
                                        res = list(search(query_n, stop=num))
                                        res1 = []
                                        for i in res:
                                            res1.append(i)
                                        net = []
                                        work = []
                                        for i in res:
                                            t = i
                                            y = list(t)
                                            z = y[8:]
                                            h = z.index("/")
                                            k = z[:h]
                                            elem = "."
                                            idx = np.argwhere(np.array(k) == elem).flatten()
                                            idx = list(idx)
                                            d = idx[len(idx) - 1]
                                            s = k[d + 1:]
                                            res = "".join(s)
                                            net.append(res)
                                            try:
                                                w = requests.get(i)
                                                work.append("+")
                                            except requests.exceptions.ConnectionError:
                                                work.append("-")
                                            except requests.exceptions.ReadTimeout:
                                                work.append("-")

                                        df = pd.DataFrame({})
                                        df["res"] = res1
                                        df["net"] = net
                                        df["work"] = work
                                        df1 = df[(df["net"] == "ru") & (df["work"] == "+")]
                                        print(tabulate(df1, headers="keys", tablefmt="psql"))
                                        print("------------------")
                                        fi = list(df1["res"])
                                        if len(fi) > 1:
                                            fi1 = []
                                            for k in range(len(fi)):
                                                fi1.append(k)

                                            rand = random.choice(fi1)
                                            print(rand)
                                            res_res = fi[rand]
                                            wget.download(res_res)
                                        elif len(fi) == 1:
                                            res_res = fi[0]
                                            wget.download(res_res)
                                        else:
                                            print("No results!")
                                    except urllib.error.HTTPError:
                                        print("too many requests!")
                                    except requests.exceptions.ContentDecodingError:
                                        print("decoding error!")
                                    except requests.exceptions.InvalidSchema:
                                        print("no connection adapters were found")
                                    except UnicodeEncodeError:
                                        print("cannot encode!!!")
                                    except http.client.RemoteDisconnected:
                                        print("http mistake")
                                else:
                                    print("Wrong!!!")
                                    subprocess.call("python start.py", shell=True)
                            else:
                                print("Wrong!!!")
                                subprocess.call("python start.py", shell=True)
                        else:
                            print("Wrong!!!")
                            subprocess.call("python start.py", shell=True)
                    else:
                        print("Wrong!!!")
                        subprocess.call("python start.py", shell=True)
                else:
                    print("Wrong!!!")
                    subprocess.call("python start.py", shell=True)
            else:
                print("Wrong!!!")
                subprocess.call("python start.py", shell=True)
        else:
            print("request verification by morphological analysis failed")
            print("do you want to find information by previous request?[y/n]")
            answer = 'y'
            if answer == "y":
                kinds = ["odt(0)", "pdf(1)", "xlsx(2)", "csv(3)", "docx(4)", "pptx(5)", "doc(6)"]
                kinds1 = ["odt", "pdf", "xlsx", "csv", "docx", "pptx", "doc"]
                for i in kinds:
                    print(i)
                if res != "":
                    if res.isdigit():
                        res = int(res)
                        if 0 <= res < len(kinds1):
                            res1 = kinds1[res]
                            mass = [query, res1]
                            query_n = "".join(mass)
                            if num != "":
                                if num.isdigit():
                                    num = int(num)
                                    if num > 0:
                                        try:
                                            res = list(search(query_n, stop=num))
                                            res1 = []
                                            for i in res:
                                                res1.append(i)
                                            net = []
                                            work = []
                                            for i in res:
                                                t = i
                                                y = list(t)
                                                z = y[8:]
                                                h = z.index("/")
                                                k = z[:h]
                                                elem = "."
                                                idx = np.argwhere(np.array(k) == elem).flatten()
                                                idx = list(idx)
                                                d = idx[len(idx) - 1]
                                                s = k[d + 1:]
                                                res = "".join(s)
                                                net.append(res)
                                                try:
                                                    w = requests.get(i)
                                                    work.append("+")
                                                except requests.exceptions.ConnectionError:
                                                    work.append("-")
                                                except requests.exceptions.ReadTimeout:
                                                    work.append("-")

                                            df = pd.DataFrame({})
                                            df["res"] = res1
                                            df["net"] = net
                                            df["work"] = work
                                            df1 = df[(df["net"] == "ru") & (df["work"] == "+")]
                                            print(tabulate(df1, headers="keys", tablefmt="psql"))
                                            print("------------------")
                                            fi = list(df1["res"])
                                            if len(fi) > 1:
                                                fi1 = []
                                                for k in range(len(fi)):
                                                    fi1.append(k)

                                                rand = random.choice(fi1)
                                                print(rand)
                                                res_res = fi[rand]
                                                wget.download(res_res)
                                            elif len(fi) == 1:
                                                res_res = fi[0]
                                                wget.download(res_res)
                                            else:
                                                print("No results!")
                                        except urllib.error.HTTPError:
                                            print("too many requests!")
                                        except requests.exceptions.ContentDecodingError:
                                            print("decoding error!")
                                        except requests.exceptions.InvalidSchema:
                                            print("no connection adapters were found")
                                        except UnicodeEncodeError:
                                            print("cannot encode!!!")
                                        except http.client.RemoteDisconnected:
                                            print("http mistake")
                                    else:
                                        print("Wrong!!!")
                                        subprocess.call("python start.py", shell=True)
                                else:
                                    print("Wrong!!!")
                                    subprocess.call("python start.py", shell=True)
                            else:
                                print("Wrong!!!")
                                subprocess.call("python start.py", shell=True)
                        else:
                            print("Wrong!!!")
                            subprocess.call("python start.py", shell=True)
                    else:
                        print("Wrong!!!")
                        subprocess.call("python start.py", shell=True)
                else:
                    print("Wrong!!!")
                    subprocess.call("python start.py", shell=True)
            elif answer == "n":
                subprocess.call("python start.py", shell=True)
            else:
                print("???")
                subprocess.call("python start.py", shell=True)
    else:
        print("???")
        subprocess.call("python start.py", shell=True)
    return '0'