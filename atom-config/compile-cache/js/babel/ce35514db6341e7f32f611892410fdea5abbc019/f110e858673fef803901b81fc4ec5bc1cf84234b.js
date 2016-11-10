'use babel';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var StatusBarItem = (function () {
  function StatusBarItem() {
    _classCallCheck(this, StatusBarItem);

    this.element = document.createElement('a');
    this.element.className = 'line-ending-tile inline-block';
    this.setLineEndings(new Set());
  }

  _createClass(StatusBarItem, [{
    key: 'setLineEndings',
    value: function setLineEndings(lineEndings) {
      this.lineEndings = lineEndings;
      this.element.textContent = lineEndingName(lineEndings);
    }
  }, {
    key: 'hasLineEnding',
    value: function hasLineEnding(lineEnding) {
      return this.lineEndings.has(lineEnding);
    }
  }, {
    key: 'onClick',
    value: function onClick(callback) {
      this.element.addEventListener('click', callback);
    }
  }]);

  return StatusBarItem;
})();

exports['default'] = StatusBarItem;

function lineEndingName(lineEndings) {
  if (lineEndings.size > 1) {
    return 'Mixed';
  } else if (lineEndings.has('\n')) {
    return 'LF';
  } else if (lineEndings.has('\r\n')) {
    return 'CRLF';
  } else if (lineEndings.has('\r')) {
    return 'CR';
  } else {
    return '';
  }
}
module.exports = exports['default'];

//# sourceURL=/home/travis/build/atom/atom/out/app/node_modules/line-ending-selector/lib/status-bar-item.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hdG9tL2F0b20vb3V0L2FwcC9ub2RlX21vZHVsZXMvbGluZS1lbmRpbmctc2VsZWN0b3IvbGliL3N0YXR1cy1iYXItaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUE7O0FBRVgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksWUFBWSxHQUFHLENBQUMsWUFBWTtBQUFFLFdBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFFLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsVUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxBQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEFBQUMsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEFBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUFFO0dBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSxRQUFJLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEFBQUMsSUFBSSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEFBQUMsT0FBTyxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsQ0FBQSxFQUFHLENBQUM7O0FBRXRqQixTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQUUsTUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUEsQUFBQyxFQUFFO0FBQUUsVUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0dBQUU7Q0FBRTs7QUFFekosSUFScUIsYUFBYSxHQUFBLENBQUEsWUFBQTtBQUNwQixXQURPLGFBQWEsR0FDakI7QUFTYixtQkFBZSxDQUFDLElBQUksRUFWSCxhQUFhLENBQUEsQ0FBQTs7QUFFOUIsUUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzFDLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFBO0FBQ3hELFFBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0dBQy9COztBQVlELGNBQVksQ0FqQk8sYUFBYSxFQUFBLENBQUE7QUFrQjlCLE9BQUcsRUFBRSxnQkFBZ0I7QUFDckIsU0FBSyxFQVpRLFNBQUEsY0FBQSxDQUFDLFdBQVcsRUFBRTtBQUMzQixVQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtBQUM5QixVQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDdkQ7R0FhQSxFQUFFO0FBQ0QsT0FBRyxFQUFFLGVBQWU7QUFDcEIsU0FBSyxFQWJPLFNBQUEsYUFBQSxDQUFDLFVBQVUsRUFBRTtBQUN6QixhQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQ3hDO0dBY0EsRUFBRTtBQUNELE9BQUcsRUFBRSxTQUFTO0FBQ2QsU0FBSyxFQWRDLFNBQUEsT0FBQSxDQUFDLFFBQVEsRUFBRTtBQUNqQixVQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQTtLQUNqRDtHQWVBLENBQUMsQ0FBQyxDQUFDOztBQUVKLFNBbkNtQixhQUFhLENBQUE7Q0FvQ2pDLENBQUEsRUFBRyxDQUFDOztBQUVMLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0F0Q0csYUFBYSxDQUFBOztBQXFCbEMsU0FBUyxjQUFjLENBQUUsV0FBVyxFQUFFO0FBQ3BDLE1BQUksV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7QUFDeEIsV0FBTyxPQUFPLENBQUE7R0FDZixNQUFNLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQTtHQUNaLE1BQU0sSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ2xDLFdBQU8sTUFBTSxDQUFBO0dBQ2QsTUFBTSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUE7R0FDWixNQUFNO0FBQ0wsV0FBTyxFQUFFLENBQUE7R0FDVjtDQUNGO0FBb0JELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9ob21lL3RyYXZpcy9idWlsZC9hdG9tL2F0b20vb3V0L2FwcC9ub2RlX21vZHVsZXMvbGluZS1lbmRpbmctc2VsZWN0b3IvbGliL3N0YXR1cy1iYXItaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1c0Jhckl0ZW0ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdsaW5lLWVuZGluZy10aWxlIGlubGluZS1ibG9jaydcbiAgICB0aGlzLnNldExpbmVFbmRpbmdzKG5ldyBTZXQoKSlcbiAgfVxuXG4gIHNldExpbmVFbmRpbmdzIChsaW5lRW5kaW5ncykge1xuICAgIHRoaXMubGluZUVuZGluZ3MgPSBsaW5lRW5kaW5nc1xuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IGxpbmVFbmRpbmdOYW1lKGxpbmVFbmRpbmdzKVxuICB9XG5cbiAgaGFzTGluZUVuZGluZyAobGluZUVuZGluZykge1xuICAgIHJldHVybiB0aGlzLmxpbmVFbmRpbmdzLmhhcyhsaW5lRW5kaW5nKVxuICB9XG5cbiAgb25DbGljayAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjaylcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lRW5kaW5nTmFtZSAobGluZUVuZGluZ3MpIHtcbiAgaWYgKGxpbmVFbmRpbmdzLnNpemUgPiAxKSB7XG4gICAgcmV0dXJuICdNaXhlZCdcbiAgfSBlbHNlIGlmIChsaW5lRW5kaW5ncy5oYXMoJ1xcbicpKSB7XG4gICAgcmV0dXJuICdMRidcbiAgfSBlbHNlIGlmIChsaW5lRW5kaW5ncy5oYXMoJ1xcclxcbicpKSB7XG4gICAgcmV0dXJuICdDUkxGJ1xuICB9IGVsc2UgaWYgKGxpbmVFbmRpbmdzLmhhcygnXFxyJykpIHtcbiAgICByZXR1cm4gJ0NSJ1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG4iXX0=
//# sourceURL=/usr/share/atom/resources/app.asar/node_modules/line-ending-selector/lib/status-bar-item.js
