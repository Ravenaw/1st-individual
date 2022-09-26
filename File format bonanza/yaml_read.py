import yaml
from yaml.loader import SafeLoader

with open('yaml.yaml') as f:
    data = yaml.load(f, Loader=SafeLoader)
    print(data)