import cv2 as cv

img = cv.imread("images/people1.jpg")
img = cv.resize(img, (img.shape[1]//5, img.shape[0]//5))
gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)

faces = cv.CascadeClassifier("AI/faces.xml")

#get coordinates, where was found faces
#In case then AI was trained for smaller images, yuo should use scaleFactor > 1 and opposite
#minNeighbors means how many faces can be found nearly each other
results = faces.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=4)

for (x, y, width, height) in results: #iterate found results
    cv.rectangle(img, (x, y), (x+width, y+height), (0, 255, 0), thickness=2)

cv.imshow("Faces", img)
cv.waitKey(0)