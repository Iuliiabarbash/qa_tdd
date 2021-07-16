let date = "1-1-1"

function dateFormat (shortDate: any): any {
    // this function will accept a numeric short date:
    // MM-DD-YYYY
    // and will return a long date, for example:
    // "2-5-2019" => "February 5, 2019"
    // "11-12-2022" => "November 12, 2022"
    return `${date}`;
  }

    describe("dateFormat", () => {
    it("should format shorter short dates correctly", () => {
        expect(dateFormat("1-1-2000")).toBe("January 1, 2000");
    });
    it("should format longer 'short' date correctly", () => {
        expect(dateFormat("01-01-2000")).toBe("January 1, 2000");
    });
    it("should format long past or future dates", () => {
        expect(dateFormat("1-1-1")).toBe("January 1, 1");
        expect(dateFormat("12-31-99999")).toBe("December 31, 99999")
    });
  });