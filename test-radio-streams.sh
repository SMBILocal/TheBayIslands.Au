#!/bin/bash
# Test Radio Stream URLs
# Usage: bash test-radio-streams.sh

echo "🎵 Testing Bay Islands Radio Streams"
echo "======================================"
echo ""

# Function to test a stream URL
test_stream() {
    local name="$1"
    local url="$2"
    
    echo "Testing: $name"
    echo "URL: $url"
    
    # Try to get headers from the stream
    response=$(curl -s -I -L --max-time 10 "$url" 2>&1)
    status=$?
    
    if [ $status -eq 0 ]; then
        # Check if response contains valid audio headers
        if echo "$response" | grep -qi "audio\|mpeg\|stream"; then
            echo "✅ WORKING - Audio stream detected"
        elif echo "$response" | grep -qi "200 OK"; then
            echo "✅ RESPONDING - 200 OK received"
        else
            echo "⚠️  UNKNOWN - Response received but no audio headers"
        fi
    else
        echo "❌ FAILED - Connection timeout or error"
    fi
    
    echo "---"
    echo ""
}

# Test Bay Islands streams
test_stream "Bay Islands Radio (Primary)" "https://stream.radio.co/s8a3f8b3c4/listen"
test_stream "Bay Islands Radio (Alt)" "https://playerservices.streamtheworld.com/api/livestream-redirect/ISLAND_88AAC.aac"

# Test Bay FM
test_stream "Bay FM (HTTPS)" "https://stream.bayfm.org.au:8443/bayfm"
test_stream "Bay FM (HTTP)" "http://stream.bayfm.org.au:8000/bayfm"

# Test 96five
test_stream "96five (Primary)" "https://playerservices.streamtheworld.com/api/livestream-redirect/96FIVE.mp3"
test_stream "96five (Alt)" "https://ice.streamcity.com.au/96five"

# Test 4AAA
test_stream "4AAA Murri Country" "https://stream.4aaa.org.au/4aaa"

# Test Triple M
test_stream "Triple M Brisbane" "https://playerservices.streamtheworld.com/api/livestream-redirect/TRIPLEM_BRISAAC.aac"

# Test Triple J
test_stream "Triple J Brisbane" "https://live-radio01.mediahubaustralia.com/2TJW/mp3/"

echo "======================================"
echo "Testing complete!"
echo ""
echo "NOTE: ✅ means the URL responds"
echo "      ❌ means connection failed"
echo "      ⚠️  means unclear status"
echo ""
echo "To test playback in browser console:"
echo "const a = new Audio('STREAM_URL'); a.play();"
