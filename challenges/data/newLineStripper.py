__author__ = 'ebylund'
def main():

    fileToStrip = raw_input("Enter file name to strip: ")
    outputFile = raw_input("Enter output file name: ")
    fin = open(fileToStrip, "rb")
    fout = open(outputFile, "wb")
    for line in fin:
        for word in line.split():
             fout.write(word + " ")

main()
