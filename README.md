# node-js에서 API 서버 만들기

## REST API란?
- REST 특징을 지키면서 API를 제공하는 것

### REST(Representational State Transtfer)
- 웹에 존재하는 모든 자원(이미지, 동영상, DB자원)에 고유한 URI를 부여해 활용하는 것(자원을 정의하고 자원에 대한 주소를 지정하는 방법론을 의미)

### API(Application Programming Interface)란?
- 응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스
- API를 통해 소스 및 DB에는 접근하지 못하게 하고 해당 프로그램을 사용할 수 있도록 기능을 제공하게 하는 것.
- 자신들이 가지고 있는 여러 데이터나 기능을 API로 제공하여 사용자가 사용할 수 있게 하고 있다.
- 즉, 어떤 데이터나 기능을 제어할 수 있게 만든 인터페이스

## API 서버를 통해 API를 제공하는 이유
- 우리 시스템의 특정 데이터 혹은 특정 기능을 사용하고 싶은 다른 시스템에 우리 프로그램 코드를 노출시키지 않고
혹은 데이터 베이스에 직접 연결해서 데이터를 컨넥션하고 컨트롤하는 권한을 주지 않고
우리 시스템에서 제공하는 기능이나 데이터를 제공할 때 API 서버를 사용하게 된다.

- 웹 HTTP를 이용해서 우리 API 서버에 URL 방식으로 데이터를 호출하는 REST API 방식으로 제공한다.

## Postman
- 개발한 API를 테스트할 수 있는 API 개발 생산성을 높여주는 플랫

## uuid-apikey
- API 키를 생성해주는 모듈.
