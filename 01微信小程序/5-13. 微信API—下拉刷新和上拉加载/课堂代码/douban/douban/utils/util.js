"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
const formatNumber = (n) => {
  const str = n.toString();
  return str[1] ? str : '0' + str;
};
exports.fetchData = (options, cb) => {
  wx.request({
    url: options.url,
    data: options.data,
    header: {
      'content-type': 'application/json'
    },
    success(res) {
      if (!cb)
        return;
      cb(res);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixVQUFVLENBQUMsSUFBVTtJQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFFaEMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEgsQ0FBQztBQVRELGdDQVNDO0FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtBQUNqQyxDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxDQUFDLE9BQXlCLEVBQUUsRUFBeUMsRUFBRSxFQUFFO0lBQ2hHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDVCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7UUFDaEIsSUFBSSxFQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDRCxPQUFPLENBQUMsR0FBRztZQUNULElBQUksQ0FBQyxFQUFFO2dCQUFFLE9BQU07WUFDZixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVCxDQUFDO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcblxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArICcgJyArIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKGZvcm1hdE51bWJlcikuam9pbignOicpXG59XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IChuOiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc3RyID0gbi50b1N0cmluZygpXG4gIHJldHVybiBzdHJbMV0gPyBzdHIgOiAnMCcgKyBzdHJcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoRGF0YSA9IChvcHRpb25zOiB3eC5SZXF1ZXN0T3B0aW9uLCBjYjogd3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFjayB8IHVuZGVmaW5lZCkgPT4ge1xuICB3eC5yZXF1ZXN0KHtcbiAgICB1cmw6IG9wdGlvbnMudXJsLCAvLyDku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICBkYXRhOm9wdGlvbnMuZGF0YSxcbiAgICBoZWFkZXI6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XG4gICAgfSxcbiAgICBzdWNjZXNzKHJlcykge1xuICAgICAgaWYgKCFjYikgcmV0dXJuXG4gICAgICBjYihyZXMpXG4gICAgfVxuICB9KVxufSJdfQ==