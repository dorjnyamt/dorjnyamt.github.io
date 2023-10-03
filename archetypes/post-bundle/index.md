---
title: {{ slicestr (replace .Name "-" " ") 11 | title }}
date: {{ dateFormat "2006-01-02" .Date }}
# canonicalURL: https://dorjnyam.com/posts/{{.Name}}
tags: []
draft: true
---