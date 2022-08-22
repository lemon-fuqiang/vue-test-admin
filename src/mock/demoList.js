let demoList = [
    {
      id: 1,
      text: "测试1"
    }
  ];
  export default {
    "get|/parameter/query": option => {
      return {
        status: 200,
        message: "success",
        data: demoList
      };
    }
  };
  