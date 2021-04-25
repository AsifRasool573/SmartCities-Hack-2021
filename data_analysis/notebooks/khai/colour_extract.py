from urllib.request import urlopen
from PIL import Image
from keras.preprocessing import image

url = 'https://cdn.mattaki.com/toyota/static-assets/homepage/medium/new-vehicles-2.jpg'
im = Image.open(urlopen(url))
im = image.img_to_array(im)

height = im.shape[0]
width = im.shape[1]
channel_count = im.shape[2]

if channel_count is not 3:
  print('This program must use a 3-channel/coloured image')

cy, cx = height/2, width/2

print(f'The vehicle colour (RGB value) is {im[int(cy)][int(cx)]}')