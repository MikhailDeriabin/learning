Keep the amount of threads that you use to run your tools low!!
We will be using ffuf for this.
https://github.com/ffuf/ffuf

    Please go to the releases page and download the correct binary for your system. (https://github.com/ffuf/ffuf/releases/tag/v1.3.1)

    Now we also need a wordlist. First we will be directory brute forcing which usually makes me reach for this wordlist: curl https://raw.githubusercontent.com/daviddias/node-dirbuster/master/lists/directory-list-2.3-medium.txt -o dir-list.txt

    Now we can start fuzzing, by default ffuf will use 40 threads but that is way too much for our poor lab server so we will add the -t flag and set it to 1. We will also indicate the wordlist with the -w parameter and what to fuzz with the FUZZ indication.

    ```./ffuf -u https://hackxpert.com/FUZZ -w dir-list.txt -t 1```

-------------------------------------------------------------------

    Now let's try to fuzz a parameter of the page. We need another wordlist of course and we can try this one:

        ```curl https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/burp-parameter-names.txt -o params.txt```

    ```./ffuf -u https://hackxpert.com/RXSS/GET/00.php?FUZZ=tesdf -w params.txt -t 1```

-------------------------------------------------------------------

    If we notice that the server responds with a 200 status code if we are not entering correct parameters, but other status codes such as 302, we can filter out those 200 status codes with -fc

    ```./ffuf -u hackxpert.com/RXSS/GET/00.php?FUZZ=tesdf -w params.txt -t 1 -fc 200,201```

    That was a filter option, we can also set a matcher option to ONLY show these codes -mc

    ```./ffuf -u https://hackxpert.com/RXSS/GET/00.php?FUZZ=tesdf -w params.txt -t 1 -mc 200,201```

-------------------------------------------------------------------

    Now finally let's try to guess pages

    ```https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/Common-PHP-Filenames.txt will be our wordlist```

    Curl the wordlist again

    ```./ffuf -u https://hackxpert.com/RXSS/GET/FUZZ -w Common-PHP-Filenames.txt -t 1```