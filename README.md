# Introducing Connected-Data
누구나 공개된 데이터를 활용할 수 있습니다. 그러나 데이터를 활용하기 위해 가공하는 과정이 복잡하고, 개별적으로 정제한 데이터는 공유되기 어렵습니다. 본 프로젝트는 공공 데이터를 정제하여 구조화하고, 관계를 정의하기 위해 Linked Data 기술을 적용합니다.

# 오픈 데이터에서 링크드 데이터로 진화
### 가공되지 않은 데이터
열린 데이터 광장은 XLS, CSV, API 등 다양한 데이터 형식을 제공합니다. 그러나 원본 시스템에서 추출된 데이터는 본래 의미를 잃어 데이터를 올바로 이해하는데 한계가 있습니다.
![Image](http://lod.datahub.kr/projects/seoul/img/0.png)

### 의미적 데이터
시맨틱 웹 & 링크드 데이터 기술은 데이터의 의미를 정의하고, 데이터 사이의 관계를 정의할 수 있습니다. "서울은 도시이고, 서울시청은 건물이다"와 같이 우리가 이해하는 개념을 컴퓨터가 이해할 수 있는 언어 (RDF)로 표현합니다.
![Image](http://lod.datahub.kr/projects/seoul/img/1.png)

### 시맨틱 질의 및 탐색
RDF로 구축된 데이터는 시맨틱 웹 표준 질의 언어인 SPARQL을 통해 탐색할 수 있습니다. SPARQL Endpoint을 이용하면 모든 데이터에 접근하거나 데이터를 다운로드할 수 있습니다.
![Image](http://lod.datahub.kr/projects/seoul/img/2.png)

### 시맨틱 브라우저
RDF로 구축된 데이터를 웹 브라우저에서 탐색할 수 있는 기능을 제공합니다. 별도의 플러그인없이 시맨틱 데이터의 구조와 데이터 사이의 관계를 볼 수 있습니다. 시맨틱 브라우저에 있는 링크를 클릭하면 데이터의 상세 내용을 볼 수 있습니다.
![Image](http://lod.datahub.kr/projects/seoul/img/3.png)

### 패싯 네비게이션
사용자가 원하는 옵션을 선택하면 검색 결과가 동적으로 변경됩니다. 시맨틱 웹 또는 링크드 데이터에 대한 지식이 없어도 원하는 결과를 얻을 수 있는 인터페이스를 제공합니다.
![Image](http://lod.datahub.kr/projects/seoul/img/4.png)

### 시맨틱 관계 탐색
시맨틱 데이터에 표현된 관계를 바탕으로 데이터를 탐색할 수 있습니다. 키워드를 입력하면 키워드 사이의 관계를 시각적으로 보여줍니다.
![Image](http://lod.datahub.kr/projects/seoul/img/5.png)

### 시맨틱 그래프
시맨틱 데이터는 끊김없이 연결되는 그래프 구조입니다. 시맨틱 그래프는 개별 데이터의 연결 관계를 시각적으로 보여주고, 서로 다른 데이터셋이나 도메인을 넘어 탐색할 수 있는 기능을 제공합니다.
![Image](http://lod.datahub.kr/projects/seoul/img/6.png)

# 데이터셋
본 프로젝트에서 활용한 데이터는 서울시, 문화재청, 행안부에 공개된 자료이며, 행정구역과 위치를 기준으로 데이터를 연결했습니다. 서울시 또는 전국의 행정구역에 따라 해당되는 문화시설과 문화재를 탐색할 수 있습니다.

데이터셋 | 출처 | 수집방법 | 설명
--- | --- | --- | ---
문화시설 | [열린 데이터 광장](http://data.seoul.go.kr) | API | 서울시에 있는 문화시설 약 600여종
문화재 | [문화재청](http://www.cha.go.kr) | HTML 수집 | 대한민국의 국보, 보물, 유형/무형 문화재 약 13,000여종
행정구역 | [행자부](http://www.mopas.go.kr) | XLS | 대한민국의 도, 시, 구, 군, 읍, 면, 동을 포함하는 모든 행정구역 (행정동 기준)

# 링크드 데이터의 소개

### Linked Data란?
웹에 존재하는 다양한 정보자원을 노출 (expose), 공유 (share), 연결 (connect)하기 위한 기술입니다. 사전적 의미에서 “Linked”는 링크로 연결된 (connected by a link)이란 의미이며, 이런 측면에서 [Linked Data](http://en.wikipedia.org/wiki/Linked_data)는 “링크로 연결된 의미적 데이터”로 정의됩니다.

기술적 관점에서 Linked Data는 모든 정보를 URI라는 고유한 이름과 RDF라는 형식으로 정의하고 HTTP를 통해 접근하는 것을 구현하는 것입니다.
쉽게 표현하면 웹에 있는 모든 정보를 의미적으로 연결하는 것으로 현재 웹과 보완적 관계입니다. Linked Data에 대한 개념은 [팀 버너스리 (Tim Berners-Lee)](http://en.wikipedia.org/wiki/Tim_Berners-Lee)에 의해 정의되었지만, [DBpedia](http://dbpedia.org)를 만든 독일의 크리스 비처(Chris Bizer)를 통해 상당한 진전이 있었습니다. 크리스는 웹에 구조적인 데이터가 많지 않던 2006년부터 관계형 데이터베이스에 있는 데이터를 RDF로 변환하는 방법에 대해 연구했습니다. Dbpedia는 [위키피디아](http://en.wikipedia.org)의 모든 데이터를 구조적인 형식으로 변환하여 서비스하고 있으며, 수많은 데이터와 연결관계를 만드는 핵심으로 성장하고 있습니다.

구글의 [Knowledge Graph](http://www.google.com/insidesearch/features/search/knowledge.html)나 페이스북의 [Graph Search](https://www.facebook.com/about/graphsearch)는 데이터 사이의 관계를 표현하고 이를 바탕으로 의미적인 검색을 지원하고 있는데, 이런 기술도 Linked Data의 응용영역으로 이해할 수 있습니다.

### 시맨틱 질의
일반적으로 데이터를 관계형 데이터베이스로 저장하면 SQL (Structured Query Language)이라는 질의 언어를 통해 데이터를 검색합니다. Linked Data로 구축된 데이터는 [SPARQL](http://en.wikipedia.org/wiki/Sparql)이라는 질의 언어를 사용합니다. 이 언어는 RDF로 표현된 데이터를 질의하기 위해 만들어진 것으로 SQL과 같은 역할을 합니다. SPARQL Endpoint는 원격으로 데이터에 접근할 수 있는 인터페이스로 Endpoint 주소만 알면 모든 데이터에 접근할 수 있습니다.

서울시 열린 데이터광장은 숨어있는 데이터셋을 공개하고 탐색할 수 있지만 데이터셋에 포함된 개별 데이터는 탐색할 수 없습니다. SPARQL Endpoint는 별도의 오픈 API를 설계하지 않고 개별 데이터를 탐색할 수 기능을 제공합니다. SPARQL에 대한 튜토리얼은 [Cambridge Semantics](http://www.cambridgesemantics.com/semantic-university/sparql-by-example)의 자료를 참조하시기 바랍니다. 

### 패싯 네비게이션
Linked Data로 구축된 데이터를 효과적으로 탐색하기 위해 패싯 네비게이션을 제공합니다. Linked Data로 구축된 데이터는 다양한 속성을 포함하게 됩니다. 데이터의 구조와 특징을 모르면 검색이 어렵습니다.

패싯 네비게이션은 사용자가 선택한 옵션에 따라 원하는 방향으로 정보를 탐색할 수 있습니다. 패싯 (Facet)은 사물의 측면 또는 단면을 의미합니다. 예를 들어, 문화 시설은 박물관, 미술관, 기념관 등 여러 형식으로 구분이 되고, 서울시의 각 자치구에 위치합니다. 이 때 문화시설의 형식과 위치를 하나의 패싯으로 구분할 수 있습니다. 패싯 네이게이션의 왼쪽에 있는 옵션을 선택하면 자치구에 따라 문화 시설의 현재 현황을 탐색할 수 있습니다.

일반적으로 Linked Data나 온톨로지하면 어렵다라는 생각을 많이 하는데, 패싯 네이게이션을 적용함으로써 구축된 데이터에서 원하는 정보를 효과적으로 탐색할 수 있습니다.

### 관련 용어
* **시맨틱 웹 (Semantic Web)** - 기계가 정보의 의미를 이해하고 처리할 수 있는 거대한 정보의 공간. 의미적으로 연결된 데이터를 만드는 기술이며 동시에 비전으로 언급됨
* **온톨로지 (Ontology)** - 세계를 구성하는 대상들의 본질과 유형에 관한 이론이며, 개념과 개념 사이의 관계를 표현하는데 사용됨
* **LOD (Linked Open Data)** - 시맨틱 웹을 실현하기 위한 응용 기술로 Linked Data 기술을 통해 공개된 거대한 데이터를 말함
* **HTTP (Hyper text Transfer Protocol)** - 웹을 통해 컴퓨터가 통신하기 위한 메시지 기반 언어 프로토콜
* **URI (Uniform Resource Identifier)** - 모든 웹 자원을 식별하기 위한 고유한 이름
* **RDF (Resource Description Framework)** - 웹 데이터를 의미적으로 기술하기 위한 언어
* **SPARQL (SPARQL Protocol and RDF Query Language)** - RDF 데이터를 질의하기 위한 언어. SQL 언어와 유사하지만 그래프 구조를 질의하기 위한 언어임

