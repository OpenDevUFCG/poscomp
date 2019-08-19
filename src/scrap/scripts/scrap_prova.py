#coding: utf-8
#!/usr/bin/python3

import PyPDF2

doc_name = "2018"
obj = open("../example/" + doc_name + ".pdf", "rb")
pdf_reader = PyPDF2.PdfFileReader(obj, strict=False)

num_of_pages = pdf_reader.getNumPages()

file_name = "scrap_" + doc_name
poscomp_file = open("../data/" + file_name + ".txt", 'w')

for page in range(2, num_of_pages-2):
    page_text = pdf_reader.getPage(page).extractText()
    poscomp_file.write(page_text)
    
poscomp_file.close()
obj.close()