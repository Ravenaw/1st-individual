import xml.dom.minidom
  
docs = xml.dom.minidom.parse("xml.xml")

print(docs.toxml())